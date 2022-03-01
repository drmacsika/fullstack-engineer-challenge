import policies_data from "./mock_data/mock_data";
const dateScalar = require("./utils/date")
import dayjs from "dayjs";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
import generateToken from './utils/generateToken';
const {
  validateRegisterInput,
  validateLoginInput
} = require('./utils/validators');
const User = require('./models/User');

// This resolver retrieves policies from the mock_data or firestore db
// depending on what we pass to it.
// It resolves the custom date type going from the firestore to the graphql
// from graphql to the client and vice versa.
const resolvers = {
    Date: dateScalar,
    Query: {
        policies: () => policies_data
    },
    Mutation: {
        async login(parent: any, { username, password }: any) {
          const { errors, valid } = validateLoginInput(username, password);
    
          if (!valid) {
            throw new UserInputError('Errors', { errors });
          }
    
          const user = await User.findOne({ username });
    
          if (!user) {
            errors.general = 'This user does not exist.';
            throw new UserInputError('This user does not exist.', { errors });
          }
    
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            errors.general = 'Wrong credentials';
            throw new UserInputError('Wrong credentials', { errors });
          }
    
          const token = generateToken(user);
    
          return {
            ...user._doc,
            id: user._id,
            token
          };
        },
        async register(
          parent: any,
          {
            // Destructure the input from the args parameter
            // Originally given from Apollo mutation function
            // We took off the "context" and the "info" parameter
            // since we do not need them but we still need to pass the "parent"
            // In order to access the args parameter
            registerInput: { username, email, password, confirmPassword }
          }: any
        ){
          // Validate user data
          const { valid, errors } = validateRegisterInput(
            username,
            email,
            password,
            confirmPassword
          );
          if (!valid) {
            throw new UserInputError('Errors', { errors });
          }
          // TODO: Make sure user doesnt already exist
          const user = await User.findOne({ username });
          if (user) {
            throw new UserInputError('Username is taken', {
              errors: {
                username: 'This username is taken'
              }
            });
          }
          // hash password and create an auth token
          password = await bcrypt.hash(password, 12);
          
          
          const newUser = new User({
            email: email,
            username: username,
            password: password,
            createdAt: dayjs(new Date()).format()
          });
    
          const res = await newUser.save();
    
          const token = generateToken(res);
    
          return {
            ...res._doc,
            id: res._id,
            token
          };
        }
      }
};

export default resolvers;
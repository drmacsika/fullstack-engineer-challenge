/**
 * This file is intended to be used as a temporal data store for the mock data.
 * and testing the queries.
 */

const policies_data = [
    {
      id: "1",
      customer: {
        id: "1",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "January 1 2030"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-1111231",
      start_date: "01/01/2001",
      end_date: "01/01/2016",
      created_at: "01/01/2000"
    },
    {
      id: "2",
      customer: {
        id: "2",
        first_name: "Jane",
        last_name: "Doe",
        date_of_birth: "01/01/1980"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-1213904232",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
      id: "3",
      customer: {
        id: "3",
        first_name: "Jamiax",
        last_name: "Vous",
        date_of_birth: "01/01/1980"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-1223",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
      id: "4",
      customer: {
        id: "4",
        first_name: "Johnny",
        last_name: "Joe",
        date_of_birth: "01/01/1980"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-143233",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
      id: "11",
      customer: {
        id: "11",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "January 1 2030"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-3123",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
      id: "12",
      customer: {
        id: "12",
        first_name: "Jane",
        last_name: "Doe",
        date_of_birth: "01/01/1980"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "214",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
      id: "13",
      customer: {
        id: "13",
        first_name: "Jamiax",
        last_name: "Vous",
        date_of_birth: "01/01/1980"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-1253",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
      id: "14",
      customer: {
        id: "14",
        first_name: "Johnny",
        last_name: "Joe",
        date_of_birth: "01/01/1980"
      },
      provider: "AIG",
      insurance_type: "LIABILITY",
      status: "ACTIVE",
      policy_number: "AIG-4123",
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
    },
    {
        id: "10",
        customer: {
          id: "10",
          first_name: "John",
          last_name: "Doe",
          date_of_birth: "January 1 2030"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-1523",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "20",
        customer: {
          id: "20",
          first_name: "Jane",
          last_name: "Doe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-6123",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "30",
        customer: {
          id: "30",
          first_name: "Jamiax",
          last_name: "Vous",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-1723",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "40",
        customer: {
          id: "40",
          first_name: "Johnny",
          last_name: "Joe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-1210039",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "110",
        customer: {
          id: "110",
          first_name: "John",
          last_name: "Doe",
          date_of_birth: "January 1 2030"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-1203",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "120",
        customer: {
          id: "120",
          first_name: "Jane",
          last_name: "Doe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-0123",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "130",
        customer: {
          id: "130",
          first_name: "Jamiax",
          last_name: "Vous",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-12223",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "140",
        customer: {
          id: "140",
          first_name: "Johnny",
          last_name: "Joe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-11123",
        start_date: "03/03/2011",
        end_date: "02/02/2012",
        created_at: "04/04/2015"
      },
      {
        id: "100000",
        customer: {
          id: "10000",
          first_name: "John",
          last_name: "Doe",
          date_of_birth: "January 1 2030"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-11112310000",
        start_date: "01/01/2001",
        end_date: "01/01/2016",
        created_at: "01/01/2000"
      },
      {
        id: "20000",
        customer: {
          id: "20000",
          first_name: "Jane",
          last_name: "Doe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-12222213904232",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "30000",
        customer: {
          id: "30000",
          first_name: "Jamiax",
          last_name: "Vous",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-12222223",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "40000",
        customer: {
          id: "40000",
          first_name: "Johnny",
          last_name: "Joe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-1432222233",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "110000",
        customer: {
          id: "110000",
          first_name: "John",
          last_name: "Doe",
          date_of_birth: "January 1 2030"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-22223123",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "120000",
        customer: {
          id: "120000",
          first_name: "Jane",
          last_name: "Doe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-2566614",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "130000",
        customer: {
          id: "130000",
          first_name: "Jamiax",
          last_name: "Vous",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-12333353",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
        id: "140000",
        customer: {
          id: "140000",
          first_name: "Johnny",
          last_name: "Joe",
          date_of_birth: "01/01/1980"
        },
        provider: "AIG",
        insurance_type: "LIABILITY",
        status: "ACTIVE",
        policy_number: "AIG-41333323",
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      },
      {
          id: "100000",
          customer: {
            id: "100000",
            first_name: "John",
            last_name: "Doe",
            date_of_birth: "January 1 2030"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-15233333",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "200000",
          customer: {
            id: "200000",
            first_name: "Jane",
            last_name: "Doe",
            date_of_birth: "01/01/1980"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-64444123",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "300000",
          customer: {
            id: "300000",
            first_name: "Jamiax",
            last_name: "Vous",
            date_of_birth: "01/01/1980"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-17244443",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "400000",
          customer: {
            id: "400000",
            first_name: "Johnny",
            last_name: "Joe",
            date_of_birth: "01/01/1980"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-12100444439",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "1100000",
          customer: {
            id: "1100000",
            first_name: "John",
            last_name: "Doe",
            date_of_birth: "January 1 2030"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-12044443",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "1200000",
          customer: {
            id: "1200000",
            first_name: "Jane",
            last_name: "Doe",
            date_of_birth: "01/01/1980"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-01244443",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "1300000",
          customer: {
            id: "1300000",
            first_name: "Jamiax",
            last_name: "Vous",
            date_of_birth: "01/01/1980"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-122244443",
          start_date: "01/01/2020",
          end_date: "01/01/2021",
          created_at: "01/01/2020"
        },
        {
          id: "1400000",
          customer: {
            id: "1400000",
            first_name: "Johnny",
            last_name: "Joe",
            date_of_birth: "01/01/1980"
          },
          provider: "AIG",
          insurance_type: "LIABILITY",
          status: "ACTIVE",
          policy_number: "AIG-111444423",
          start_date: "03/03/2011",
          end_date: "02/02/2012",
          created_at: "04/04/2015"
        }
  ]

export default policies_data;
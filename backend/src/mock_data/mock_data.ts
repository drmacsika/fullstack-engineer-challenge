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
      start_date: "01/01/2020",
      end_date: "01/01/2021",
      created_at: "01/01/2020"
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
        start_date: "01/01/2020",
        end_date: "01/01/2021",
        created_at: "01/01/2020"
      }
  ]

export default policies_data;
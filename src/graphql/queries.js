/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const me = /* GraphQL */ `
  query Me {
    me {
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      workstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        _id
        transactionType
        staffMember {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        member {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        tools {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        training {
          _id
          name
          createdAt
          updatedAt
        }
        status
        comment
        createdAt
        updatedAt
      }
      bevoCard
      memberType
      createdAt
      updatedAt
    }
  }
`;
export const members = /* GraphQL */ `
  query Members {
    members {
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      workstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        _id
        transactionType
        staffMember {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        member {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        tools {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        training {
          _id
          name
          createdAt
          updatedAt
        }
        status
        comment
        createdAt
        updatedAt
      }
      bevoCard
      memberType
      createdAt
      updatedAt
    }
  }
`;
export const singleMember = /* GraphQL */ `
  query SingleMember {
    singleMember {
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      workstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        _id
        transactionType
        staffMember {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        member {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        tools {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        training {
          _id
          name
          createdAt
          updatedAt
        }
        status
        comment
        createdAt
        updatedAt
      }
      bevoCard
      memberType
      createdAt
      updatedAt
    }
  }
`;
export const transactions = /* GraphQL */ `
  query Transactions {
    transactions {
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      member {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      training {
        _id
        name
        createdAt
        updatedAt
      }
      status
      comment
      createdAt
      updatedAt
    }
  }
`;
export const singleTransaction = /* GraphQL */ `
  query SingleTransaction {
    singleTransaction {
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      member {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      training {
        _id
        name
        createdAt
        updatedAt
      }
      status
      comment
      createdAt
      updatedAt
    }
  }
`;
export const tools = /* GraphQL */ `
  query Tools {
    tools {
      _id
      name
      location
      status
      currentHolder {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      currentWorkstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      transactionRecord
      toolType
      inService
      createdAt
      updatedAt
    }
  }
`;
export const singleTool = /* GraphQL */ `
  query SingleTool {
    singleTool {
      _id
      name
      location
      status
      currentHolder {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      currentWorkstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      transactionRecord
      toolType
      inService
      createdAt
      updatedAt
    }
  }
`;
export const outstandingTransactions = /* GraphQL */ `
  query OutstandingTransactions {
    outstandingTransactions {
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      member {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      training {
        _id
        name
        createdAt
        updatedAt
      }
      status
      comment
      createdAt
      updatedAt
    }
  }
`;
export const signedInStudents = /* GraphQL */ `
  query SignedInStudents {
    signedInStudents {
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      workstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        _id
        transactionType
        staffMember {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        member {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        tools {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        training {
          _id
          name
          createdAt
          updatedAt
        }
        status
        comment
        createdAt
        updatedAt
      }
      bevoCard
      memberType
      createdAt
      updatedAt
    }
  }
`;
export const login = /* GraphQL */ `
  query Login($eid: String!, $password: String!) {
    login(eid: $eid, password: $password) {
      member {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      token
      tokenExpiration
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      member {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      training {
        _id
        name
        createdAt
        updatedAt
      }
      status
      comment
      createdAt
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _id
        transactionType
        staffMember {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        member {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        tools {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        training {
          _id
          name
          createdAt
          updatedAt
        }
        status
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      workstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        _id
        transactionType
        staffMember {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        member {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        tools {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        training {
          _id
          name
          createdAt
          updatedAt
        }
        status
        comment
        createdAt
        updatedAt
      }
      bevoCard
      memberType
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTool = /* GraphQL */ `
  query GetTool($id: ID!) {
    getTool(id: $id) {
      _id
      name
      location
      status
      currentHolder {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          _id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      currentWorkstation {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      transactionRecord
      toolType
      inService
      createdAt
      updatedAt
    }
  }
`;
export const listTools = /* GraphQL */ `
  query ListTools(
    $filter: ModelToolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _id
        name
        location
        status
        currentHolder {
          _id
          eid
          firstName
          lastName
          password
          phone
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          _id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

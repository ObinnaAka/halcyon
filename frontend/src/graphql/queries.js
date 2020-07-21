/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      transactionID
      transactionType
      staffMember {
        memberID
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        memberID
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        items {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        nextToken
      }
      training {
        id
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
        transactionID
        transactionType
        staffMember {
          memberID
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
          memberID
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
          nextToken
        }
        training {
          id
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
      memberID
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        inService
        updatedAt
        createdAt
      }
      workstation {
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        inService
        updatedAt
        createdAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        transactionID
        transactionType
        staffMember {
          memberID
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
          memberID
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
          nextToken
        }
        training {
          id
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
        memberID
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
      toolID
      name
      location
      status
      currentHolder {
        memberID
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        inService
        updatedAt
        createdAt
      }
      transactionRecord {
        items {
          transactionID
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      toolType
      inService
      updatedAt
      createdAt
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        inService
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
      id
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
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOutstandingTransactions = /* GraphQL */ `
  query GetOutstandingTransactions($status: String!) {
    getOutstandingTransactions(status: $status) {
      id
      transactionType
      staffMember {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      staffMemberId
      member {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      memberId
      tools {
        items {
          id
          name
          location
          status
          currentHolderId
          toolType
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
      version
    }
  }
`;
export const listTransactionsRange = /* GraphQL */ `
  query ListTransactionsRange($sort: String!, $from: String!, $limit: Int!) {
    listTransactionsRange(sort: $sort, from: $from, limit: $limit) {
      id
      transactionType
      staffMember {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      staffMemberId
      member {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      memberId
      tools {
        items {
          id
          name
          location
          status
          currentHolderId
          toolType
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
      version
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      transactionType
      staffMember {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      staffMemberId
      member {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      memberId
      tools {
        items {
          id
          name
          location
          status
          currentHolderId
          toolType
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
      version
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
        id
        transactionType
        staffMember {
          id
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        staffMemberId
        member {
          id
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        memberId
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
        version
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      eid
      firstName
      lastName
      password
      phone
      signInStatus
      email
      trainings {
        id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        id
        name
        location
        status
        currentHolder {
          id
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        updatedAt
        createdAt
      }
      workstation {
        id
        name
        location
        status
        currentHolder {
          id
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        updatedAt
        createdAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        items {
          id
          transactionType
          staffMemberId
          memberId
          status
          comment
          createdAt
          updatedAt
          version
        }
        nextToken
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
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
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
      id
      name
      location
      status
      currentHolder {
        id
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        workstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      currentHolderId
      currentWorkstation {
        id
        name
        location
        status
        currentHolder {
          id
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
        updatedAt
        createdAt
      }
      transactionRecord {
        items {
          id
          transactionType
          staffMemberId
          memberId
          status
          comment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      toolType
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
        id
        name
        location
        status
        currentHolder {
          id
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          location
          status
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        transactionRecord {
          nextToken
        }
        toolType
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

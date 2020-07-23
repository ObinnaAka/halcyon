/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOutstandingTransactions = /* GraphQL */ `
  query GetOutstandingTransactions($status: String!) {
    getOutstandingTransactions(status: $status) {
      transactionId
      transactionType
      staffMember {
        id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        nextToken
      }
      training {
        trainingId
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
      transactionId
      transactionType
      staffMember {
        id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        nextToken
      }
      training {
        trainingId
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
      transactionId
      transactionType
      staffMember {
        id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        nextToken
      }
      training {
        trainingId
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
        transactionId
        transactionType
        staffMember {
          id
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
        staffMemberId
        member {
          id
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
        memberId
        tools {
          nextToken
        }
        training {
          trainingId
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
      signinStatus
      email
      trainings {
        trainingId
        name
        createdAt
        updatedAt
      }
      itemRecord {
        toolId
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
          signinStatus
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
          toolId
          name
          location
          status
          currentHolderId
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
        toolId
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
          signinStatus
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
          toolId
          name
          location
          status
          currentHolderId
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
        items {
          transactionId
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
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
      toolId
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
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
        toolId
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
          signinStatus
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
          toolId
          name
          location
          status
          currentHolderId
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
          transactionId
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
        toolId
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
          signinStatus
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
          toolId
          name
          location
          status
          currentHolderId
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
      trainingId
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
        trainingId
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchTransactions = /* GraphQL */ `
  query SearchTransactions(
    $filter: SearchableTransactionFilterInput
    $sort: SearchableTransactionSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTransactions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        transactionId
        transactionType
        staffMember {
          id
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
        staffMemberId
        member {
          id
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
        memberId
        tools {
          nextToken
        }
        training {
          trainingId
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
      total
    }
  }
`;
export const searchMembers = /* GraphQL */ `
  query SearchMembers(
    $filter: SearchableMemberFilterInput
    $sort: SearchableMemberSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchMembers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          trainingId
          name
          createdAt
          updatedAt
        }
        itemRecord {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolId
          name
          location
          status
          currentHolderId
          toolType
          inService
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
      total
    }
  }
`;
export const searchTools = /* GraphQL */ `
  query SearchTools(
    $filter: SearchableToolFilterInput
    $sort: SearchableToolSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTools(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        toolId
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
          signinStatus
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
          toolId
          name
          location
          status
          currentHolderId
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
      total
    }
  }
`;

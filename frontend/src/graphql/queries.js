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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      materials {
        items {
          id
          name
          count
          createdAt
          updatedAt
        }
        nextToken
      }
      training {
        id
        name
        createdAt
        updatedAt
      }
      transactionStatus
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      materials {
        items {
          id
          name
          count
          createdAt
          updatedAt
        }
        nextToken
      }
      training {
        id
        name
        createdAt
        updatedAt
      }
      transactionStatus
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      materials {
        items {
          id
          name
          count
          createdAt
          updatedAt
        }
        nextToken
      }
      training {
        id
        name
        createdAt
        updatedAt
      }
      transactionStatus
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
          memberStatus
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        memberId
        tools {
          nextToken
        }
        materials {
          nextToken
        }
        training {
          id
          name
          createdAt
          updatedAt
        }
        transactionStatus
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
        items {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      workstation {
        id
        name
        description
        location
        status
        toolStatus
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        toolType
        updatedAt
        createdAt
      }
      conductRecord
      memberStatus
      reservations {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        items {
          id
          transactionType
          staffMemberId
          memberId
          transactionStatus
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
      description
      location
      status
      toolStatus
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
        description
        location
        status
        toolStatus
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        toolType
        updatedAt
        createdAt
      }
      reservations {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        items {
          id
          transactionType
          staffMemberId
          memberId
          transactionStatus
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
        description
        location
        status
        toolStatus
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        reservations {
          nextToken
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
export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
      id
      name
      count
      createdAt
      updatedAt
    }
  }
`;
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
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
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
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
          memberStatus
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        memberId
        tools {
          nextToken
        }
        materials {
          nextToken
        }
        training {
          id
          name
          createdAt
          updatedAt
        }
        transactionStatus
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
        signInStatus
        email
        trainings {
          id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        conductRecord
        memberStatus
        reservations {
          nextToken
        }
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
        id
        name
        description
        location
        status
        toolStatus
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
          memberStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          status
          toolStatus
          currentHolderId
          toolType
          updatedAt
          createdAt
        }
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        toolType
        updatedAt
        createdAt
      }
      nextToken
      total
    }
  }
`;

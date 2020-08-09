/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      transactionType
      staffMember {
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
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
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
        createdAt
        updatedAt
      }
      staffMemberId
      member {
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
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
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
        createdAt
        updatedAt
      }
      memberId
      tools
      materials
      training {
        id
        name
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      request
      transactionStatus
      transactionComment
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
          createdAt
          updatedAt
        }
        staffMemberId
        member {
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
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        training {
          id
          name
          createdAt
          updatedAt
        }
        request
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($eid: ID!) {
    getMember(eid: $eid) {
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
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      itemRecord {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
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
        toolStatus
        currentHolder {
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
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      conductRecord
      memberStatus
      reservations {
        items {
          id
          memberId
          toolId
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
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      bevoCard
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $eid: ID
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMembers(
      eid: $eid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
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
      toolStatus
      currentHolder {
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
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
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
        createdAt
        updatedAt
      }
      currentHolderId
      currentWorkstation {
        id
        name
        description
        location
        toolStatus
        currentHolder {
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
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      currentWorkstationId
      reservations {
        items {
          id
          memberId
          toolId
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        id
        transactionType
        staffMember {
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
          createdAt
          updatedAt
        }
        staffMemberId
        member {
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
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        training {
          id
          name
          createdAt
          updatedAt
        }
        request
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      transactionRecordId
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
        toolStatus
        currentHolder {
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
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
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
      transactionRecord {
        items {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
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
        transactionRecord {
          nextToken
        }
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
      transactionRecord {
        id
        transactionType
        staffMember {
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
          createdAt
          updatedAt
        }
        staffMemberId
        member {
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
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        training {
          id
          name
          createdAt
          updatedAt
        }
        request
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
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
        transactionRecord {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($name: ID!) {
    getInventory(name: $name) {
      name
      count
      category
      createdAt
      updatedAt
    }
  }
`;
export const listInventorys = /* GraphQL */ `
  query ListInventorys(
    $name: ID
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInventorys(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        count
        category
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
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
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
        createdAt
        updatedAt
      }
      memberId
      tool {
        id
        name
        description
        location
        toolStatus
        currentHolder {
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
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          request
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      toolId
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
          createdAt
          updatedAt
        }
        memberId
        tool {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        toolId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransactionByStatus = /* GraphQL */ `
  query GetTransactionByStatus(
    $transactionStatus: String
    $updatedAtId: ModelTransactionByStatusCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTransactionByStatus(
      transactionStatus: $transactionStatus
      updatedAtId: $updatedAtId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        transactionType
        staffMember {
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
          createdAt
          updatedAt
        }
        staffMemberId
        member {
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
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        training {
          id
          name
          createdAt
          updatedAt
        }
        request
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
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
          createdAt
          updatedAt
        }
        staffMemberId
        member {
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
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        training {
          id
          name
          createdAt
          updatedAt
        }
        request
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      nextToken
      total
    }
  }
`;

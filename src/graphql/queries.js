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
        trainings
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
        workstationId
        conductRecord
        conductStatus
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
        trainings
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
        workstationId
        conductRecord
        conductStatus
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
      reservations {
        items {
          id
          time
          memberId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      training {
        id
        name
        duration
        capacity
        transactionRecord {
          nextToken
        }
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      requests
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
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
      trainings
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
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          trainings
          workstationId
          conductRecord
          conductStatus
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
          reservationSlots
          requests
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
      workstationId
      conductRecord
      conductStatus
      reservations {
        items {
          id
          time
          memberId
          toolId
          transactionGroup
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
          reservationSlots
          requests
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
        trainings
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
        workstationId
        conductRecord
        conductStatus
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
      group {
        name
        count
        toolType
        tools {
          nextToken
        }
        createdAt
        updatedAt
      }
      toolStatus
      currentHolder {
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings
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
        workstationId
        conductRecord
        conductStatus
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
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          trainings
          workstationId
          conductRecord
          conductStatus
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
          reservationSlots
          requests
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
          time
          memberId
          toolId
          transactionGroup
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
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
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          trainings
          workstationId
          conductRecord
          conductStatus
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
          reservationSlots
          requests
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
      duration
      capacity
      transactionRecord {
        items {
          id
          transactionType
          staffMemberId
          memberId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      reservations {
        items {
          id
          time
          memberId
          toolId
          transactionGroup
          createdAt
          updatedAt
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
        duration
        capacity
        transactionRecord {
          nextToken
        }
        reservations {
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      price
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
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        price
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($name: String!) {
    getInventory(name: $name) {
      name
      count
      toolType
      tools {
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
      createdAt
      updatedAt
    }
  }
`;
export const listInventorys = /* GraphQL */ `
  query ListInventorys(
    $name: String
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
        toolType
        tools {
          nextToken
        }
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
      time
      member {
        eid
        firstName
        lastName
        password
        phone
        signInStatus
        email
        trainings
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
        workstationId
        conductRecord
        conductStatus
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
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          trainings
          workstationId
          conductRecord
          conductStatus
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
          reservationSlots
          requests
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
      training {
        id
        name
        duration
        capacity
        transactionRecord {
          nextToken
        }
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      transactionGroup
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
        time
        member {
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          trainings
          workstationId
          conductRecord
          conductStatus
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
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        transactionGroup
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
        transactionRecord {
          nextToken
        }
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      studentMessage
      staffMessage
      createdAt
      updatedAt
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        openingTime
        closingTime
        description
        requiredTrainings {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        studentMessage
        staffMessage
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
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
export const getTransactionByMember = /* GraphQL */ `
  query GetTransactionByMember(
    $memberId: ID
    $createdAtId: ModelTransactionByMemberCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTransactionByMember(
      memberId: $memberId
      createdAtId: $createdAtId
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
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
export const getTransactionByStaff = /* GraphQL */ `
  query GetTransactionByStaff(
    $staffMemberId: ID
    $createdAtId: ModelTransactionByStaffCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTransactionByStaff(
      staffMemberId: $staffMemberId
      createdAtId: $createdAtId
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
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
export const getTransactionByDate = /* GraphQL */ `
  query GetTransactionByDate(
    $createdAt: AWSDateTime
    $updatedAtId: ModelTransactionByDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTransactionByDate(
      createdAt: $createdAt
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
          trainings
          workstationId
          conductRecord
          conductStatus
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
          trainings
          workstationId
          conductRecord
          conductStatus
          bevoCard
          createdAt
          updatedAt
        }
        memberId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        requests
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
export const listReservationGroups = /* GraphQL */ `
  query ListReservationGroups(
    $transactionGroup: ID
    $timeId: ModelReservationByGroupCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservationGroups(
      transactionGroup: $transactionGroup
      timeId: $timeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        time
        member {
          eid
          firstName
          lastName
          password
          phone
          signInStatus
          email
          trainings
          workstationId
          conductRecord
          conductStatus
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
        training {
          id
          name
          duration
          capacity
          createdAt
          updatedAt
        }
        transactionGroup
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

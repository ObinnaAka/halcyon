/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewTransaction = /* GraphQL */ `
  mutation CreateNewTransaction(
    $id: ID
    $transactionStatus: String
    $transactionComment: String
    $input: CreateTransactionInput!
  ) {
    createNewTransaction(
      id: $id
      transactionStatus: $transactionStatus
      transactionComment: $transactionComment
      input: $input
    ) {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      signInStatus
      email
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
          userId
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
          staffUserId
          userId
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      signInStatus
      email
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
          userId
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
          staffUserId
          userId
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      signInStatus
      email
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
          userId
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
          staffUserId
          userId
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
      createdAt
      updatedAt
    }
  }
`;
export const createTool = /* GraphQL */ `
  mutation CreateTool(
    $input: CreateToolInput!
    $condition: ModelToolConditionInput
  ) {
    createTool(input: $input, condition: $condition) {
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
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
          userId
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
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
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
  }
`;
export const updateTool = /* GraphQL */ `
  mutation UpdateTool(
    $input: UpdateToolInput!
    $condition: ModelToolConditionInput
  ) {
    updateTool(input: $input, condition: $condition) {
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
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
          userId
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
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
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
  }
`;
export const deleteTool = /* GraphQL */ `
  mutation DeleteTool(
    $input: DeleteToolInput!
    $condition: ModelToolConditionInput
  ) {
    deleteTool(input: $input, condition: $condition) {
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
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
          userId
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
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
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
  }
`;
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      id
      name
      duration
      capacity
      reservations {
        items {
          id
          time
          userId
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
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
      id
      name
      duration
      capacity
      reservations {
        items {
          id
          time
          userId
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
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
      id
      name
      duration
      capacity
      reservations {
        items {
          id
          time
          userId
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
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
      id
      name
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
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
  }
`;
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
      id
      name
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
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
  }
`;
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
      id
      name
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
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
  }
`;
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
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
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
      id
      time
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
      id
      time
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
      id
      time
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
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
        createdAt
        updatedAt
      }
      userId
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
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
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
          staffUserId
          userId
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
export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
      id
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
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
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
      id
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
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
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
      id
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
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

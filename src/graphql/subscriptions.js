/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateTool = /* GraphQL */ `
  subscription OnCreateTool {
    onCreateTool {
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
export const onUpdateTool = /* GraphQL */ `
  subscription OnUpdateTool {
    onUpdateTool {
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
export const onDeleteTool = /* GraphQL */ `
  subscription OnDeleteTool {
    onDeleteTool {
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
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining {
    onCreateTraining {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining {
    onUpdateTraining {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining {
    onDeleteTraining {
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
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial {
    onCreateMaterial {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial {
    onUpdateMaterial {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial {
    onDeleteMaterial {
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
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory {
    onCreateInventory {
      name
      count
      category
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory {
    onUpdateInventory {
      name
      count
      category
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory {
    onDeleteInventory {
      name
      count
      category
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
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

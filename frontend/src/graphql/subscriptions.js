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
          transactionComment
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
          transactionComment
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
          transactionComment
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
          transactionComment
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
          transactionComment
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
          transactionComment
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
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining {
    onCreateTraining {
      id
      name
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
      count
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
      createdAt
      updatedAt
    }
  }
`;

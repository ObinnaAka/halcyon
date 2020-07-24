/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
          inService
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
          inService
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
          id
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
          inService
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
          inService
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
          id
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
          inService
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
          inService
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
          id
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateTool = /* GraphQL */ `
  subscription OnCreateTool {
    onCreateTool {
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
          inService
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
      inService
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
          inService
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
      inService
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
          inService
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
      inService
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

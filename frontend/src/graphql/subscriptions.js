/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateTool = /* GraphQL */ `
  subscription OnCreateTool {
    onCreateTool {
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
export const onUpdateTool = /* GraphQL */ `
  subscription OnUpdateTool {
    onUpdateTool {
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
export const onDeleteTool = /* GraphQL */ `
  subscription OnDeleteTool {
    onDeleteTool {
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
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining {
    onCreateTraining {
      trainingId
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining {
    onUpdateTraining {
      trainingId
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining {
    onDeleteTraining {
      trainingId
      name
      createdAt
      updatedAt
    }
  }
`;

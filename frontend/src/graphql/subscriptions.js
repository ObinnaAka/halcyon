/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewRequest = /* GraphQL */ `
  subscription OnNewRequest {
    onNewRequest {
      id
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
    }
  }
`;
export const onNewStudent = /* GraphQL */ `
  subscription OnNewStudent {
    onNewStudent {
      id
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
    }
  }
`;
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
        signinStatus
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
        signinStatus
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
        signinStatus
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
      tools {
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        id
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
        tools {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        id
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
        tools {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      conductRecord
      conductStatus
      transactionRecord {
        id
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
        tools {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
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
        signinStatus
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      transactionRecord
      toolType
      inService
      createdAt
      updatedAt
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
        signinStatus
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      transactionRecord
      toolType
      inService
      createdAt
      updatedAt
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
        signinStatus
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
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        workstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          id
          transactionType
          status
          comment
          createdAt
          updatedAt
        }
        bevoCard
        memberType
        createdAt
        updatedAt
      }
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
          signinStatus
          email
          conductRecord
          conductStatus
          bevoCard
          memberType
          createdAt
          updatedAt
        }
        currentWorkstation {
          id
          name
          location
          status
          transactionRecord
          toolType
          inService
          createdAt
          updatedAt
        }
        transactionRecord
        toolType
        inService
        createdAt
        updatedAt
      }
      transactionRecord
      toolType
      inService
      createdAt
      updatedAt
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewRequest = /* GraphQL */ `
  subscription OnNewRequest {
    onNewRequest {
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
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
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
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
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
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
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
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
      _id
      transactionType
      staffMember {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
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
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
        transactionType
        staffMember {
          _id
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
          _id
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
          _id
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
          _id
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
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
        transactionType
        staffMember {
          _id
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
          _id
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
          _id
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
          _id
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
      _id
      eid
      firstName
      lastName
      password
      phone
      signinStatus
      email
      trainings {
        _id
        name
        createdAt
        updatedAt
      }
      itemRecord {
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
        _id
        transactionType
        staffMember {
          _id
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
          _id
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
          _id
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
          _id
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
      _id
      name
      location
      status
      currentHolder {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
      _id
      name
      location
      status
      currentHolder {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
      _id
      name
      location
      status
      currentHolder {
        _id
        eid
        firstName
        lastName
        password
        phone
        signinStatus
        email
        trainings {
          _id
          name
          createdAt
          updatedAt
        }
        itemRecord {
          _id
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
          _id
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
          _id
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
        _id
        name
        location
        status
        currentHolder {
          _id
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
          _id
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
      _id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining {
    onUpdateTraining {
      _id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining {
    onDeleteTraining {
      _id
      name
      createdAt
      updatedAt
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
      transactionID
      transactionType
      staffMember {
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        items {
          toolID
          name
          location
          status
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
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
      transactionID
      transactionType
      staffMember {
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        items {
          toolID
          name
          location
          status
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
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
      transactionID
      transactionType
      staffMember {
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        items {
          toolID
          name
          location
          status
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
    }
  }
`;
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
      memberID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
        transactionID
        transactionType
        staffMember {
          memberID
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
          memberID
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
      memberID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
        transactionID
        transactionType
        staffMember {
          memberID
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
          memberID
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
      memberID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
        transactionID
        transactionType
        staffMember {
          memberID
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
          memberID
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
      toolID
      name
      location
      status
      currentHolder {
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
          transactionID
          transactionType
          status
          comment
          createdAt
          updatedAt
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
      toolID
      name
      location
      status
      currentHolder {
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
          transactionID
          transactionType
          status
          comment
          createdAt
          updatedAt
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
      toolID
      name
      location
      status
      currentHolder {
        memberID
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
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        workstation {
          toolID
          name
          location
          status
          toolType
          inService
          updatedAt
          createdAt
        }
        conductRecord
        conductStatus
        transactionRecord {
          transactionID
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
        toolID
        name
        location
        status
        currentHolder {
          memberID
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
          toolID
          name
          location
          status
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
          transactionID
          transactionType
          status
          comment
          createdAt
          updatedAt
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

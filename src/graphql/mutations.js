/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewMember = /* GraphQL */ `
  mutation CreateNewMember($memberInput: MemberInput!) {
    createNewMember(memberInput: $memberInput) {
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
export const createNewTool = /* GraphQL */ `
  mutation CreateNewTool($toolInput: ToolInput!) {
    createNewTool(toolInput: $toolInput) {
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
export const createNewTransaction = /* GraphQL */ `
  mutation CreateNewTransaction($transactionInput: TransactionInput) {
    createNewTransaction(transactionInput: $transactionInput) {
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
export const updateOldMember = /* GraphQL */ `
  mutation UpdateOldMember($memberID: ID!) {
    updateOldMember(memberID: $memberID) {
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
export const updateOldTool = /* GraphQL */ `
  mutation UpdateOldTool($toolID: ID!) {
    updateOldTool(toolID: $toolID) {
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
export const toolCheckout = /* GraphQL */ `
  mutation ToolCheckout {
    toolCheckout {
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
export const updateOldTransaction = /* GraphQL */ `
  mutation UpdateOldTransaction($transactionID: ID!) {
    updateOldTransaction(transactionID: $transactionID) {
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
export const authTest = /* GraphQL */ `
  mutation AuthTest($transactionInput: TransactionInput) {
    authTest(transactionInput: $transactionInput) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createTool = /* GraphQL */ `
  mutation CreateTool(
    $input: CreateToolInput!
    $condition: ModelToolConditionInput
  ) {
    createTool(input: $input, condition: $condition) {
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
export const updateTool = /* GraphQL */ `
  mutation UpdateTool(
    $input: UpdateToolInput!
    $condition: ModelToolConditionInput
  ) {
    updateTool(input: $input, condition: $condition) {
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
export const deleteTool = /* GraphQL */ `
  mutation DeleteTool(
    $input: DeleteToolInput!
    $condition: ModelToolConditionInput
  ) {
    deleteTool(input: $input, condition: $condition) {
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
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      _id
      name
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
      _id
      name
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
      _id
      name
      createdAt
      updatedAt
    }
  }
`;

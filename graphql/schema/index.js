const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Transaction{
    _id: ID!
    transactionType: String!
    staffMember: Member
    member: Member!
    tool: Tool
    traning: Training
    status: String
    comment: String
    createdAt: String!
    updatedAt: String!
}

input TransactionInput{
    transactionType: String!
    staffMember: ID
    member: ID
    tool: ID
    training: ID
    status: String
    comment: String
}

type Member{
    _id: ID!
    eid: String!
    firstName: String!
    lastName: String!
    password: String
    phone: String
    joinDate: String
    signinStatus: Boolean
    email: String!
    trainings: [Training]
    itemRecord: [Tool]
    conductRecord: [String]
    conductStatus: Int
    transactionRecord: [Transaction]
    bevoCard: String
    memberType: String!
    createdAt: String!
    updatedAt: String!
}
input MemberInput{
    eid: String!
    firstName: String!
    lastName: String!
    password: String
    phone: String
    joinDate: String
    signinStatus: Boolean
    email: String!
    trainings: [ID]
    bevoCard: String
    memberType: String!
}
type Tool{
    _id: ID!
    name: String!
    location: String
    barcode: String
    status: Int
    currentHolder: Member
    currentWorkstation: Tool
    toolType: String!
}

input ToolInput{
    name: String!
    location: String
    barcode: String
    status: Int!
    currentUser: ID
    currentWorkstation: ID
    toolType: String!
}
type Training{
    _id: ID!
    name: String!
}

input TrainingInput{
    name: String!
}
type AuthData{
    memberID: ID!
    token: String!
    tokenExpiration: Int!
}
enum MemberType{
    staff
    student
    faculty
}
type RootQuery{
    members: [Member!]!
    singleMember: Member!
    transactions: [Transaction!]!
    singleTransaction: Transaction!
    tools: [Tool!]!
    login(eid: String!, password: String!): AuthData!
}

type RootMutation{
    createMember(memberInput: MemberInput!): Member
    createTool(toolInput: ToolInput!): Tool
    createTransaction(transactionInput: TransactionInput): Transaction
    updateMember(memberID: ID!): Member
    updateTool(toolID: ID!): Tool
    updateTransaction(transactionID: ID!): Transaction
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`);

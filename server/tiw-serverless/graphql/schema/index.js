const { gql } = require("apollo-server");

module.exports = gql`
	type Transaction {
		_id: ID!
		transactionType: String!
		staffMember: Member
		member: Member
		tools: [Tool]
		training: Training
		status: String
		comment: String
		createdAt: String!
		updatedAt: String!
	}

	input TransactionInput {
		transactionType: String!
		staffMember: ID
		member: ID!
		tools: [ID]
		training: ID
		status: String
		comment: String
	}

	type Member {
		_id: ID!
		eid: String
		firstName: String
		lastName: String
		password: String
		# Prune anything that isn't necessary!
		phone: String
		signinStatus: Boolean
		email: String
		trainings: [Training]
		itemRecord: [Tool]
		workstation: Tool
		conductRecord: [String]
		conductStatus: Int
		transactionRecord: [Transaction]
		bevoCard: String
		memberType: String!
		createdAt: String
		updatedAt: String
	}
	input MemberInput {
		eid: String!
		firstName: String!
		lastName: String!
		password: String
		phone: String
		signinStatus: Boolean
		email: String!
		trainings: [ID]
		bevoCard: String
		memberType: String!
	}
	type Tool {
		_id: ID!
		name: String!
		location: String
		status: Int
		currentHolder: Member
		currentWorkstation: Tool
		transactionRecord: [ID]
		toolType: String!
		inService: Boolean
	}

	input ToolInput {
		name: String!
		location: String
		status: Int
		toolType: String
		inService: Boolean
	}
	type Training {
		_id: ID!
		name: String!
	}

	input TrainingInput {
		name: String!
	}
	type AuthData {
		member: Member!
		token: String!
		tokenExpiration: Int!
	}
	enum MemberType {
		Staff
		Student
		Faculty
	}
	type Subscription {
		onNewRequest: Transaction
		onNewStudent: Transaction
	}
	type Query {
		test: String
		me: Member
		members: [Member!]
		singleMember: Member!
		transactions: [Transaction!]!
		singleTransaction: Transaction!
		tools: [Tool!]!
		singleTool: Tool!
		outstandingTransactions: [Transaction]
		signedInStudents: [Member]
		login(eid: String!, password: String!): AuthData!
	}

	type Mutation {
		createMember(memberInput: MemberInput!): Member
		createTool(toolInput: ToolInput!): Tool
		createTransaction(transactionInput: TransactionInput): Transaction
		updateMember(memberID: ID!): Member
		updateTool(toolID: ID!): Tool
		toolCheckout: Tool!
		updateTransaction(transactionID: ID!): Transaction
		noAuthTest(transactionInput: TransactionInput): Transaction
	}

	schema {
		query: Query
		mutation: Mutation
		subscription: Subscription
	}
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransaction = /* GraphQL */ `
	mutation CreateTransaction(
		$input: CreateTransactionInput!
		$condition: ModelTransactionConditionInput
	) {
		createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
	mutation UpdateTransaction(
		$input: UpdateTransactionInput!
		$condition: ModelTransactionConditionInput
	) {
		updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
	mutation DeleteTransaction(
		$input: DeleteTransactionInput!
		$condition: ModelTransactionConditionInput
	) {
		deleteTransaction(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
	mutation CreateMember($input: CreateMemberInput!, $condition: ModelMemberConditionInput) {
		createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
	mutation UpdateMember($input: UpdateMemberInput!, $condition: ModelMemberConditionInput) {
		updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
	mutation DeleteMember($input: DeleteMemberInput!, $condition: ModelMemberConditionInput) {
		deleteMember(input: $input, condition: $condition) {
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
export const createTool = /* GraphQL */ `
	mutation CreateTool($input: CreateToolInput!, $condition: ModelToolConditionInput) {
		createTool(input: $input, condition: $condition) {
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
export const updateTool = /* GraphQL */ `
	mutation UpdateTool($input: UpdateToolInput!, $condition: ModelToolConditionInput) {
		updateTool(input: $input, condition: $condition) {
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
export const deleteTool = /* GraphQL */ `
	mutation DeleteTool($input: DeleteToolInput!, $condition: ModelToolConditionInput) {
		deleteTool(input: $input, condition: $condition) {
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
export const createTraining = /* GraphQL */ `
	mutation CreateTraining($input: CreateTrainingInput!, $condition: ModelTrainingConditionInput) {
		createTraining(input: $input, condition: $condition) {
			id
			name
			createdAt
			updatedAt
		}
	}
`;
export const updateTraining = /* GraphQL */ `
	mutation UpdateTraining($input: UpdateTrainingInput!, $condition: ModelTrainingConditionInput) {
		updateTraining(input: $input, condition: $condition) {
			id
			name
			createdAt
			updatedAt
		}
	}
`;
export const deleteTraining = /* GraphQL */ `
	mutation DeleteTraining($input: DeleteTrainingInput!, $condition: ModelTrainingConditionInput) {
		deleteTraining(input: $input, condition: $condition) {
			id
			name
			createdAt
			updatedAt
		}
	}
`;

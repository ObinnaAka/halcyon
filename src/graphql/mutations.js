/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewTransaction = /* GraphQL */ `
	mutation CreateNewTransaction(
		$id: ID
		$transactionStatus: String
		$transactionComment: String
		$input: CreateTransactionInput!
	) {
		createNewTransaction(
			id: $id
			transactionStatus: $transactionStatus
			transactionComment: $transactionComment
			input: $input
		) {
			id
		}
	}
`;
export const createTransaction = /* GraphQL */ `
	mutation CreateTransaction(
		$input: CreateTransactionInput!
		$condition: ModelTransactionConditionInput
	) {
		createTransaction(input: $input, condition: $condition) {
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
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
				createdAt
				updatedAt
			}
			memberId
			tools
			materials
			training {
				id
				name
				transactionRecord {
					nextToken
				}
				createdAt
				updatedAt
			}
			request
			transactionStatus
			transactionComment
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
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
				createdAt
				updatedAt
			}
			memberId
			tools
			materials
			training {
				id
				name
				transactionRecord {
					nextToken
				}
				createdAt
				updatedAt
			}
			request
			transactionStatus
			transactionComment
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
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
				createdAt
				updatedAt
			}
			memberId
			tools
			materials
			training {
				id
				name
				transactionRecord {
					nextToken
				}
				createdAt
				updatedAt
			}
			request
			transactionStatus
			transactionComment
			createdAt
			updatedAt
			version
		}
	}
`;
export const createMember = /* GraphQL */ `
	mutation CreateMember($input: CreateMemberInput!, $condition: ModelMemberConditionInput) {
		createMember(input: $input, condition: $condition) {
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
				transactionRecord {
					nextToken
				}
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			conductRecord
			memberStatus
			reservations {
				items {
					id
					memberId
					toolId
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
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			bevoCard
			createdAt
			updatedAt
		}
	}
`;
export const updateMember = /* GraphQL */ `
	mutation UpdateMember($input: UpdateMemberInput!, $condition: ModelMemberConditionInput) {
		updateMember(input: $input, condition: $condition) {
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
				transactionRecord {
					nextToken
				}
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			conductRecord
			memberStatus
			reservations {
				items {
					id
					memberId
					toolId
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
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			bevoCard
			createdAt
			updatedAt
		}
	}
`;
export const deleteMember = /* GraphQL */ `
	mutation DeleteMember($input: DeleteMemberInput!, $condition: ModelMemberConditionInput) {
		deleteMember(input: $input, condition: $condition) {
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
				transactionRecord {
					nextToken
				}
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			conductRecord
			memberStatus
			reservations {
				items {
					id
					memberId
					toolId
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
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			bevoCard
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			currentWorkstationId
			reservations {
				items {
					id
					memberId
					toolId
					createdAt
					updatedAt
				}
				nextToken
			}
			transactionRecord {
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
					conductRecord
					memberStatus
					bevoCard
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
					conductRecord
					memberStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				training {
					id
					name
					createdAt
					updatedAt
				}
				request
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			transactionRecordId
			toolType
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			currentWorkstationId
			reservations {
				items {
					id
					memberId
					toolId
					createdAt
					updatedAt
				}
				nextToken
			}
			transactionRecord {
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
					conductRecord
					memberStatus
					bevoCard
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
					conductRecord
					memberStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				training {
					id
					name
					createdAt
					updatedAt
				}
				request
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			transactionRecordId
			toolType
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
					currentWorkstationId
					transactionRecordId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			currentWorkstationId
			reservations {
				items {
					id
					memberId
					toolId
					createdAt
					updatedAt
				}
				nextToken
			}
			transactionRecord {
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
					conductRecord
					memberStatus
					bevoCard
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
					conductRecord
					memberStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				training {
					id
					name
					createdAt
					updatedAt
				}
				request
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			transactionRecordId
			toolType
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
			transactionRecord {
				items {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
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
			transactionRecord {
				items {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
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
			transactionRecord {
				items {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			createdAt
			updatedAt
		}
	}
`;
export const createMaterial = /* GraphQL */ `
	mutation CreateMaterial($input: CreateMaterialInput!, $condition: ModelMaterialConditionInput) {
		createMaterial(input: $input, condition: $condition) {
			id
			name
			transactionRecord {
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
					conductRecord
					memberStatus
					bevoCard
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
					conductRecord
					memberStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				training {
					id
					name
					createdAt
					updatedAt
				}
				request
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			count
			createdAt
			updatedAt
		}
	}
`;
export const updateMaterial = /* GraphQL */ `
	mutation UpdateMaterial($input: UpdateMaterialInput!, $condition: ModelMaterialConditionInput) {
		updateMaterial(input: $input, condition: $condition) {
			id
			name
			transactionRecord {
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
					conductRecord
					memberStatus
					bevoCard
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
					conductRecord
					memberStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				training {
					id
					name
					createdAt
					updatedAt
				}
				request
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			count
			createdAt
			updatedAt
		}
	}
`;
export const deleteMaterial = /* GraphQL */ `
	mutation DeleteMaterial($input: DeleteMaterialInput!, $condition: ModelMaterialConditionInput) {
		deleteMaterial(input: $input, condition: $condition) {
			id
			name
			transactionRecord {
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
					conductRecord
					memberStatus
					bevoCard
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
					conductRecord
					memberStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				training {
					id
					name
					createdAt
					updatedAt
				}
				request
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			count
			createdAt
			updatedAt
		}
	}
`;
export const createInventory = /* GraphQL */ `
	mutation CreateInventory(
		$input: CreateInventoryInput!
		$condition: ModelInventoryConditionInput
	) {
		createInventory(input: $input, condition: $condition) {
			name
			count
			category
			createdAt
			updatedAt
		}
	}
`;
export const updateInventory = /* GraphQL */ `
	mutation UpdateInventory(
		$input: UpdateInventoryInput!
		$condition: ModelInventoryConditionInput
	) {
		updateInventory(input: $input, condition: $condition) {
			name
			count
			category
			createdAt
			updatedAt
		}
	}
`;
export const deleteInventory = /* GraphQL */ `
	mutation DeleteInventory(
		$input: DeleteInventoryInput!
		$condition: ModelInventoryConditionInput
	) {
		deleteInventory(input: $input, condition: $condition) {
			name
			count
			category
			createdAt
			updatedAt
		}
	}
`;
export const createReservation = /* GraphQL */ `
	mutation CreateReservation(
		$input: CreateReservationInput!
		$condition: ModelReservationConditionInput
	) {
		createReservation(input: $input, condition: $condition) {
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
					currentWorkstationId
					transactionRecordId
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
				createdAt
				updatedAt
			}
			memberId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			toolId
			createdAt
			updatedAt
		}
	}
`;
export const updateReservation = /* GraphQL */ `
	mutation UpdateReservation(
		$input: UpdateReservationInput!
		$condition: ModelReservationConditionInput
	) {
		updateReservation(input: $input, condition: $condition) {
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
					currentWorkstationId
					transactionRecordId
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
				createdAt
				updatedAt
			}
			memberId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			toolId
			createdAt
			updatedAt
		}
	}
`;
export const deleteReservation = /* GraphQL */ `
	mutation DeleteReservation(
		$input: DeleteReservationInput!
		$condition: ModelReservationConditionInput
	) {
		deleteReservation(input: $input, condition: $condition) {
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
					currentWorkstationId
					transactionRecordId
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
				createdAt
				updatedAt
			}
			memberId
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
					currentWorkstationId
					transactionRecordId
					toolType
					updatedAt
					createdAt
				}
				currentWorkstationId
				reservations {
					nextToken
				}
				transactionRecord {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					request
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				transactionRecordId
				toolType
				updatedAt
				createdAt
			}
			toolId
			createdAt
			updatedAt
		}
	}
`;

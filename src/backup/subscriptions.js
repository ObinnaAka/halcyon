/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
	subscription OnCreateTransaction {
		onCreateTransaction {
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
				trainings
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
				conductStatus
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
				trainings
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
				conductStatus
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
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
					createdAt
					updatedAt
				}
				nextToken
			}
			reservationSlots
			training {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			requests
			transactionStatus
			transactionComment
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
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				trainings
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
				conductStatus
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
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
					createdAt
					updatedAt
				}
				nextToken
			}
			reservationSlots
			training {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			requests
			transactionStatus
			transactionComment
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
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				trainings
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
				conductStatus
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
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
					createdAt
					updatedAt
				}
				nextToken
			}
			reservationSlots
			training {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			requests
			transactionStatus
			transactionComment
			createdAt
			updatedAt
			version
		}
	}
`;
export const onCreateMember = /* GraphQL */ `
	subscription OnCreateMember {
		onCreateMember {
			eid
			firstName
			lastName
			password
			phone
			signInStatus
			email
			trainings
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
			conductStatus
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
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
					reservationSlots
					requests
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
export const onUpdateMember = /* GraphQL */ `
	subscription OnUpdateMember {
		onUpdateMember {
			eid
			firstName
			lastName
			password
			phone
			signInStatus
			email
			trainings
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
			conductStatus
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
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
					reservationSlots
					requests
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
export const onDeleteMember = /* GraphQL */ `
	subscription OnDeleteMember {
		onDeleteMember {
			eid
			firstName
			lastName
			password
			phone
			signInStatus
			email
			trainings
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
			conductStatus
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
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
					reservationSlots
					requests
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
export const onCreateTool = /* GraphQL */ `
	subscription OnCreateTool {
		onCreateTool {
			id
			name
			description
			location
			group {
				name
				count
				toolType
				tools {
					nextToken
				}
				createdAt
				updatedAt
			}
			toolStatus
			currentHolder {
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
					time
					memberId
					toolId
					transactionGroup
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
					trainings
					conductRecord
					conductStatus
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
					trainings
					conductRecord
					conductStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				reservations {
					nextToken
				}
				reservationSlots
				training {
					id
					name
					duration
					capacity
					createdAt
					updatedAt
				}
				requests
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
export const onUpdateTool = /* GraphQL */ `
	subscription OnUpdateTool {
		onUpdateTool {
			id
			name
			description
			location
			group {
				name
				count
				toolType
				tools {
					nextToken
				}
				createdAt
				updatedAt
			}
			toolStatus
			currentHolder {
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
					time
					memberId
					toolId
					transactionGroup
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
					trainings
					conductRecord
					conductStatus
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
					trainings
					conductRecord
					conductStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				reservations {
					nextToken
				}
				reservationSlots
				training {
					id
					name
					duration
					capacity
					createdAt
					updatedAt
				}
				requests
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
export const onDeleteTool = /* GraphQL */ `
	subscription OnDeleteTool {
		onDeleteTool {
			id
			name
			description
			location
			group {
				name
				count
				toolType
				tools {
					nextToken
				}
				createdAt
				updatedAt
			}
			toolStatus
			currentHolder {
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
					time
					memberId
					toolId
					transactionGroup
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
					trainings
					conductRecord
					conductStatus
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
					trainings
					conductRecord
					conductStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				reservations {
					nextToken
				}
				reservationSlots
				training {
					id
					name
					duration
					capacity
					createdAt
					updatedAt
				}
				requests
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
export const onCreateTraining = /* GraphQL */ `
	subscription OnCreateTraining {
		onCreateTraining {
			id
			name
			duration
			capacity
			transactionRecord {
				items {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					reservationSlots
					requests
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
					createdAt
					updatedAt
				}
				nextToken
			}
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
			duration
			capacity
			transactionRecord {
				items {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					reservationSlots
					requests
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
					createdAt
					updatedAt
				}
				nextToken
			}
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
			duration
			capacity
			transactionRecord {
				items {
					id
					transactionType
					staffMemberId
					memberId
					tools
					materials
					reservationSlots
					requests
					transactionStatus
					transactionComment
					createdAt
					updatedAt
					version
				}
				nextToken
			}
			reservations {
				items {
					id
					time
					memberId
					toolId
					transactionGroup
					createdAt
					updatedAt
				}
				nextToken
			}
			createdAt
			updatedAt
		}
	}
`;
export const onCreateMaterial = /* GraphQL */ `
	subscription OnCreateMaterial {
		onCreateMaterial {
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
					trainings
					conductRecord
					conductStatus
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
					trainings
					conductRecord
					conductStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				reservations {
					nextToken
				}
				reservationSlots
				training {
					id
					name
					duration
					capacity
					createdAt
					updatedAt
				}
				requests
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			price
			count
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateMaterial = /* GraphQL */ `
	subscription OnUpdateMaterial {
		onUpdateMaterial {
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
					trainings
					conductRecord
					conductStatus
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
					trainings
					conductRecord
					conductStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				reservations {
					nextToken
				}
				reservationSlots
				training {
					id
					name
					duration
					capacity
					createdAt
					updatedAt
				}
				requests
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			price
			count
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteMaterial = /* GraphQL */ `
	subscription OnDeleteMaterial {
		onDeleteMaterial {
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
					trainings
					conductRecord
					conductStatus
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
					trainings
					conductRecord
					conductStatus
					bevoCard
					createdAt
					updatedAt
				}
				memberId
				tools
				materials
				reservations {
					nextToken
				}
				reservationSlots
				training {
					id
					name
					duration
					capacity
					createdAt
					updatedAt
				}
				requests
				transactionStatus
				transactionComment
				createdAt
				updatedAt
				version
			}
			price
			count
			createdAt
			updatedAt
		}
	}
`;
export const onCreateInventory = /* GraphQL */ `
	subscription OnCreateInventory {
		onCreateInventory {
			name
			count
			toolType
			tools {
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
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateInventory = /* GraphQL */ `
	subscription OnUpdateInventory {
		onUpdateInventory {
			name
			count
			toolType
			tools {
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
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteInventory = /* GraphQL */ `
	subscription OnDeleteInventory {
		onDeleteInventory {
			name
			count
			toolType
			tools {
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
			createdAt
			updatedAt
		}
	}
`;
export const onCreateReservation = /* GraphQL */ `
	subscription OnCreateReservation {
		onCreateReservation {
			id
			time
			member {
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
			training {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			transactionGroup
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateReservation = /* GraphQL */ `
	subscription OnUpdateReservation {
		onUpdateReservation {
			id
			time
			member {
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
			training {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			transactionGroup
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteReservation = /* GraphQL */ `
	subscription OnDeleteReservation {
		onDeleteReservation {
			id
			time
			member {
				eid
				firstName
				lastName
				password
				phone
				signInStatus
				email
				trainings
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
				conductStatus
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
				group {
					name
					count
					toolType
					createdAt
					updatedAt
				}
				toolStatus
				currentHolder {
					eid
					firstName
					lastName
					password
					phone
					signInStatus
					email
					trainings
					conductRecord
					conductStatus
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
					reservationSlots
					requests
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
			training {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			transactionGroup
			createdAt
			updatedAt
		}
	}
`;

export const onCreateShop = /* GraphQL */ `
	subscription OnCreateShop {
		onCreateShop {
			name
			openingTime
			closingTime
			description
			requiredTrainings {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateShop = /* GraphQL */ `
	subscription OnUpdateShop {
		onUpdateShop {
			name
			openingTime
			closingTime
			description
			requiredTrainings {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteShop = /* GraphQL */ `
	subscription OnDeleteShop {
		onDeleteShop {
			name
			openingTime
			closingTime
			description
			requiredTrainings {
				id
				name
				duration
				capacity
				transactionRecord {
					nextToken
				}
				reservations {
					nextToken
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;

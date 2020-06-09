// This is the component for the memeber object
// Its parameters are:
/* 
eid: String
firstName: String
LastName: String 
phone: String
joinDate: Timestamp
signinStatus: Boolean
email: String
itemRecord: Array
conductRecord: Array
conductStatus: Integer
    either 0, 1, 2, 3
    default value is 1. 
    0 : Member is outstanding (has been a positive member of the community)
    1 : Normal
    2 : Probation (Member has strikes on their account)
    3 : Member is banned

transactionRecord: Array of Strings
bevoCard: String
memberType: Integer
    Between 0 and 2
    0 : Staff 
    1 : Student
    2 : Faculty
    Can possibly be a String, but "0-Member" sounds cool
*/
export class Member{
    constructor(firstName, lastName,) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
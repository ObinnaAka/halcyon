// https://stackoverflow.com/questions/37072341/how-to-use-auto-increment-for-primary-key-id-in-dynamodb
// TODO Need to create testing function for this
const generateID = (obj_type) => {
	var CUSTOMEPOCH = 1300000000000; // artificial epoch
	function generateRowId(shardId /* range 0-64 for shard/slot */) {
		var ts = new Date().getTime() - CUSTOMEPOCH; // limit to recent
		var randid = Math.floor(Math.random() * 512);
		ts = ts * 64; // bit-shift << 6
		ts = ts + shardId;
		return ts * 512 + randid;
	}
	var newPrimaryHashKey = `${obj_type}:` + generateRowId(4);
	return newPrimaryHashKey;
};

export default generateID;

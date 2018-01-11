contract token {
uint public deadline;
address highestBidder;
uint highestBid;
uint minBid;
address d1;
uint pay1;
address d2;
uint pay2;
address d3;
uint pay3;

/* This creates an array with all balances */
mapping(address => uint) refunds;

function token(uint deadline, address distributor1, address distributor2, address distributor3, uint256 minbid ){
deadline = now + deadline * 1 minutes;
d1=distributor1;
d2=distributor2;
d3=distributor3;
minBid=minbid;

}


modifier beforeDeadline() { if (now <= deadline) _; }

function () payable beforeDeadline{
	if (msg.value < highestBid) throw;
	if (highestBidder != 0)
		refunds[highestBidder] += highestBid;
	highestBidder = msg.sender;
	highestBid = msg.value;
	}

modifier afterDeadline() { if (now >= deadline) _; }
function distribute() afterDeadline{
    if(highestBid>=minBid){

	d1.send(highestBid);
	
    }
 }

function withdrawRefund() {
    uint refund = refunds[msg.sender];
    refunds[msg.sender] = 0;
    if (!msg.sender.send(refund))
     refunds[msg.sender] = refund;
  }



}

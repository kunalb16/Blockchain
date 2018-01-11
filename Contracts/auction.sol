contract auction {
  address highestBidder;
  uint highestBid;
  mapping(address => uint) refunds;
  function bid() {
    if (msg.value < highestBid) throw;
    if (highestBidder != 0)
      refunds[highestBidder] += highestBid;
    highestBidder = msg.sender;
    highestBid = msg.value;
  }
  function withdrawRefund() {
    uint refund = refunds[msg.sender];
    refunds[msg.sender] = 0;
    if (!msg.sender.send(refund))
     refunds[msg.sender] = refund;
  }
}

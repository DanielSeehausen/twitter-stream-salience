class AnalyzedText {
  // will set this.twitter_handle, this.sentiment, and this.magnitude through other functions before getting this AnalyzedText

  static getColor() {
    if (this.sentiment > 0.8) {
      return "blue"
    } else if (this.sentiment > 0.3) {
      return "green"
    } else if (this.sentiment > 0) {
      return "lime"
    } else if (this.sentiment > -0.8) {
      return "orange"
    } else if (this.sentiment > -0.3) {
      return "peru"
    } else if (this.sentiment >= -1) {
      return "red"
    }
  }

  static getSentimentPhrase() {
    switch (this.getColor()) {
      case "blue":
      return this.twitter_handle + " is doing great."
      case "green":
      return this.twitter_handle + " is doing pretty good."
      case "lime":
      return this.twitter_handle + " is doing ok."
      case "yellow":
      return this.twitter_handle + " isn't doing that great."
      case "orange":
      return this.twitter_handle + " is having a hard time."
      case "red":
      return this.twitter_handle + " is miserable."
      default:
      return "unreadable"
    }
  }

}

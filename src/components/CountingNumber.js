import React, { Component } from 'react';

class CountingNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.elementRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
   
  }


  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is unmounted
    window.removeEventListener('scroll', this.handleScroll); // Optionally remove event listener after reveal
 
  }

  handleScroll(){
   const { threshold } = this.props;
    const element = this.elementRef.current;
    const elementPosition = element.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > elementPosition + threshold) {
        this.HandleCounting();
        window.removeEventListener('scroll', this.handleScroll);
  
}
  }


  HandleCounting() {
    const { n, time } = this.props;
    const delay = time / n; // Calculate interval based on time
    //console.log(delay);
    this.interval = setInterval(() => {
        if (this.state.count < n) {
          //console.log("State increasing");
          this.setState((prevState) => ({
            count: prevState.count + 1,
          }));
        } else {
          this.setState({ count: n }); // Ensure it reaches exactly n
          clearInterval(this.interval); // Stop the interval when count reaches n
          
        }
      }, delay); // Update by the calculated interval

  }

  render() {
    const {text} = this.props;
    return <div className='counting-number' ref={this.elementRef}>{Math.round(this.state.count) + text} </div>; // Display the rounded count
  }
}

CountingNumber.defaultProps = {
    threshold: 200, // Default reveal threshold
    text: '',
   
  };

export default CountingNumber;

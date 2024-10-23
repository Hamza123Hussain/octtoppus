import React from "react";


const MaintenanceBar = () => {

    return(
        <div style={styles.container}>
            <p style={styles.paragraph}>Maintenance Mode is on. You can preview the website because you are Whitelisted.</p>
        </div>

    );
};

const styles = {
    container: {
        width: "100%",
        padding: '0',
        "margin-top": '70px',
      'background-color': 'red',
      color: 'white',
      textAlign: 'center',
      'font-size': '14px',
    },
    paragraph: {
        margin: '0',

    },

  };

  export default MaintenanceBar;
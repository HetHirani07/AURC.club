import styles from './about.module.css';
export default function About(){
    return(
        <div className={styles.container}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src='/rectBullet.png' style={{height: 10, width: 10}}></img>
                <span className={styles.title}>The Club</span>
            </div>
            <div className={styles.content}>
                <p>The club started in 2018 from IIT Bombay where we recieved training and created a benchmark by becoming the most proactive team in 
                    Task Based Training(TBT) and completed all the task in recorded time. 2018, collaboration with IIT Bombay e-Yantra we have inaugrated 
                    the ELSI lab at Adani University. Our team has been actively participating in e-Yantra.</p>
                <p>Here in the club, we organize workshops where teams are competing by performing tasks along with learning.
                     The fun increases at the time of task when each team is given a kit of Firebird V ATmega2560. Task Based Training is where the ultimate 
                     fun lies, teams are given tasks to perform and submit within given number of days.</p> 
                <p>You will be notified about the upcoming events. Till then keep learning and connecting.</p>   
            </div>
        </div>
    )
}
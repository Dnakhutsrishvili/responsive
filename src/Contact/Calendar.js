import classes from "./Calendar.module.css";

const Calendar = () => {
  return (
    <>
      <table className={classes.table}>
        <tr className={classes.days}>
          <th>SU</th>
          <th>MO</th>
          <th>TU</th>
          <th>WE</th>
          <th>TH</th>
          <th>FR</th>

          <th className={classes.kvia}> SA</th>
        </tr>
        <tr className={classes.numbers}>
          <td className={classes.box}>1</td>
          <td className={classes.box}>2</td>
          <td className={classes.box}>3</td>
          <td className={classes.boxlight}>4</td>
          <td className={classes.box}>5</td>
          <td className={classes.box}>6</td>
          <td className={classes.box}>7</td>
        </tr>
        <tr className={classes.numbers}>
          <td className={classes.boxlight}>8</td>
          <td className={classes.boxlight}>9</td>
          <td className={classes.boxlight}> 10</td>
          <td className={classes.boxlight}>11</td>
          <td className={classes.boxlight}>12</td>
          <td className={classes.boxlight}>13</td>
          <td className={classes.box}>14</td>
        </tr>
        <tr className={classes.numbers}>
          <td className={classes.boxlight}>15</td>
          <td className={classes.box}>16</td>
          <td className={classes.boxlight}>17</td>
          <td className={classes.box}>18</td>
          <td className={classes.boxlight}>19</td>
          <td className={classes.box}>20</td>
          <td className={classes.box}>21</td>
        </tr>
        <tr className={classes.numbers}>
          <td className={classes.boxlight}>21</td>
          <td className={classes.boxlight}>22</td>
          <td className={classes.boxlight}>23</td>
          <td className={classes.boxlight}>24</td>
          <td className={classes.boxlight}>25</td>
          <td className={classes.boxlight}>26</td>
          <td className={classes.box}>27</td>
        </tr>
        <tr className={classes.numbers}>
          <td className={classes.boxlight}>28</td>
          <td className={classes.boxlight}>29</td>
          <td className={classes.boxlight}>30</td>
          <td className={classes.boxlight}>31</td>
        </tr>
      </table>
    </>
  );
};
export default Calendar;

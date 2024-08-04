import React from 'react';

const EnemieTable = () => {
  return(
    <table>
      <tr>
        <th>Armor Class</th>
        <th>Hit Points</th>
        <th>Str</th>
        <th>Dex</th>
        <th>Con</th>
        <th>Int</th>
        <th>Wis</th>
        <th>Cha</th>
        <th>Attack 1</th>
        <th>Attack 2</th>
      </tr>
      <tr>
        <td>12</td>
        <td>11</td>
        <td>+0</td>
        <td>+1</td>
        <td>+1</td>
        <td>+0</td>
        <td>+0</td>
        <td>+0</td>
        <td>Melee: (1d6 +1)+3</td>
        <td>Ranged: (1d8 +1)+3</td>
      </tr>

    </table>
  );
}

export default EnemieTable

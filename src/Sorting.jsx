import {memo} from 'react';
function Sorting({sortVal,onSortChange}){
  return (
      <select className="text-gray-400 border text-sm p-2 min-w-0" placeholder="Default Sorting"
        value={sortVal}
        onChange={onSortChange}
        >
        <option value="default">Default Sort</option>
        <option value="title">Sort by title</option>
        <option value="lowTohigh">Sort by Price:Low - High</option>
        <option value="highTolow">Sort by Price:High - Low</option>
      </select>    
  )
}
const Sorted=memo(Sorting);
export default Sorted;
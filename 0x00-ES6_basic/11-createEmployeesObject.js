export default function createEmployeesObject(departmentName, employees) {
  const iteratorObj = {
    [departmentName]: employees,
  };
  return iteratorObj;
}

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student Records</h2>

      {students.map((student, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Age:</strong> {student.age}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>

          <button onClick={() => deleteStudent(index)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;

export function ProjectPreview({ variant }: { variant: 'planner' | 'library' }) {
  return (
    <div className={`preview ${variant}`} aria-hidden="true">
      <div className="mock">
        {variant === 'planner' ? (
          <>
            <div className="mock-title">Daymark <span>THIS WEEK</span></div>
            <div className="week">
              {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day) => <div key={day}>{day}<i /><i /></div>)}
            </div>
          </>
        ) : (
          <>
            <div className="mock-title">Margin Notes <span>MY LIBRARY</span></div>
            <div className="books"><i>THE<br />LONG<br />WAY</i><i>Small<br />Hours</i><i>FIELD<br />NOTES</i></div>
          </>
        )}
      </div>
    </div>
  );
}

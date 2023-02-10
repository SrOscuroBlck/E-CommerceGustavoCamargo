import "./WorkInProgress.css";

/**
 * @returns {JSX.Element} WorkInProgress components.
 * @description WorkInProgress mostraba un mensaje de "Página en construcción" mientras se 
 * desarrollaba la App he decido dejarlo ya que fue el primer componente que hice.
 */

export const WorkInProgress = () => {
  return (
    <div id="work-in-progress-background">
      <div id="work-in-progress">
        <h1>Welcome To Our Website</h1>
        <p>Find the best components here</p>
      </div>
    </div>
  );
}
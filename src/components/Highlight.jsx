import React from 'react'
import './Highlight.scss'
import { FaComments, FaPaintBrush, FaCubes, FaBullhorn, FaServer, FaChartLine } from 'react-icons/fa'

const tiles = [
  {
    title: 'Consult',
    icon: <FaComments className="icon" />,
    description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
  },
  {
    title: 'Design',
    icon: <FaPaintBrush className="icon" />,
    description: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
  },
  {
    title: 'Develop',
    icon: <FaCubes className="icon" />,
    description: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
  },
  {
    title: 'Marketing',
    icon: <FaBullhorn className="icon" />,
    description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
  },
  {
    title: 'Manage',
    icon: <FaServer className="icon" />,
    description: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
  },
  {
    title: 'Evolve',
    icon: <FaChartLine className="icon" />,
    description: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
  },
]

export default () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <h1>How Can I Help You?</h1>
          <h3>
            Our work then targeted, best practices outcomes social innovation synergy.
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
            program areas scale.
          </h3>
          <div className="tiles">
            {
              tiles.map(tile => (
                <div key={tile.title} className="tile-container">
                  <div className="tile">
                    <div className="header">
                      <h2>{tile.title}</h2>
                      {tile.icon}
                    </div>
                    <p>{tile.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
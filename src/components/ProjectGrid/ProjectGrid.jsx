import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import ProjectGridItem from 'components/ProjectGridItem/ProjectGridItem';
import style from 'components/ProjectGrid/ProjectGrid.style';

const ProjectGrid = ({ projects }) => (
  <section style={style.container}>
    <ul style={style.wrapper}>
      {
        projects.map(id => (
          <Item
            key={id}
            element={ProjectGridItem}
            itemId={id}
          />
        ))
      }
    </ul>
  </section>
);

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectGrid;

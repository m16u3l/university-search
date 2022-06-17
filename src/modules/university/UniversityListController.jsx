import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Box, Typography,
} from '@mui/material/';
import { creators as universityCreators } from '../../store/university/university.actions';
import UniversityList from './UniversityList';

const mapDispatchToProps = {
  getUniversities: universityCreators.get_university_list,
};
const mapStateToProps = ({ university: { universitiy_list } }) => ({
  universitiy_list: universitiy_list
});

const UniversityListController = ({ getUniversities, universitiy_list }) => {
  useEffect(() => {
    getUniversities()
  }, [getUniversities]);

  let componetToShow = (
    <Box pt={4}>
      <Typography variant="h6">
        University List
      </Typography>
    </Box>
  );

  componetToShow = (
    <UniversityList
      universityList={universitiy_list}
    />
  );
  return componetToShow;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UniversityListController);

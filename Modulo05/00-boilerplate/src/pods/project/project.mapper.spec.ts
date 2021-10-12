import * as commMappers from '../../common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import * as projectMapper from './project.mapper';
import { EmployeeSummary } from './project.vm';
import { mapToCollection } from '../../common/mappers';

jest.mock('../../common/mappers', ()=>({
  mapToCollection: jest.fn()
}));

describe('mapper specs', () => {
  it('mapEmployeeSummaryFromApiToVm should return a copy EmployeeSummary', () => {
    // Arrange
    const employeeSummary: EmployeeSummary = {
      id: '1',
      isAssigned: false,
      employeeName: 'John Doe',
    };

    // Act
    const result = projectMapper.mapEmployeeSummaryFromApiToVm(employeeSummary);

    // Assert
    expect(result).toEqual(employeeSummary);
  });

  it('mapEmployeeSummaryListFromApiToVm should call then method mapToCollection', () => {
    // Arrange
    const empleyees: EmployeeSummary[] = [
      {
        id: '1',
        isAssigned: false,
        employeeName: 'John Doe',
      }
    ];
    // Act
    projectMapper.mapEmployeeSummaryListFromApiToVm(empleyees);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(mapToCollection).toBeCalledTimes(1);
  });

  it ('should return a mapped project if the argument is truthy and call the mapper of employees', ()=>{

      // Arrange
      const dataProject : apiModel.Project ={
        id: '1',
        name: 'Project 1',
        externalId: '2',
        comments: 'Comments',
        isActive: true,
        employees: [{
          id:'1',
          isAssigned: false,
          employeeName: 'John Doe'
        }]
      };

      const mapEmployeeSummaryListFromApiToVmStub = jest.spyOn(projectMapper, 'mapEmployeeSummaryListFromApiToVm');

      // Act
      projectMapper.mapProjectFromApiToVm(dataProject);

      // Assert
      expect(mapEmployeeSummaryListFromApiToVmStub).toHaveBeenCalled();
  });
});

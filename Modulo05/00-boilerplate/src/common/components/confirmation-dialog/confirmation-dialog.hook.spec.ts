import { act, renderHook } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from '../../../common/models/lookup';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('confirmation-dialog.hook.spec', ()=>{

  it('isOpen should be returned true if onOpenDialog is called',()=>{
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'name'
    }

    // Act
    const { result } = renderHook(()=> useConfirmationDialog());

    act(()=>{
      result.current.onOpenDialog(item);
    })

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('isOpen should be returned false if onClose is called',()=>{
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'name'
    }

    // Act
    const { result } = renderHook(()=> useConfirmationDialog());

    act(()=>{
      result.current.onOpenDialog(item);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
  })

  it('itemToDelete should be returned empty if onAccept is called', ()=>{
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'name'
    }

    // Act
    const { result } = renderHook(()=> useConfirmationDialog());

    act(()=>{
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  })
});

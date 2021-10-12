import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  ConfirmationDialogComponent,
  Props,
} from './confirmation-dialog.component';

describe('confirmation-dialog.component.spec', () => {
  it('the dialog should not display it if the value of isOpen is false', () => {
    // Arrange
    const props: Props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of the Dialog',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleDialog = screen.queryAllByRole('heading');

    // Assert
    expect(titleDialog).toHaveLength(0);
  });

  it('the dialog should  display it if the value of isOpen is true', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of the Dialog',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleDialog = screen.getByText(props.title as string);

    // Assert
    expect(titleDialog).toBeInTheDocument();
  });

  it('onClose() should be called in the dialog if the close button is clicked', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of the Dialog',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButton = screen.getByText(props.labels.closeButton);
    fireEvent.click(closeButton);

    // Assert
    expect(props.onClose).toBeCalled();
  });

  it('onAccept() should be called in the dialog if the accept button is clicked', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of the Dialog',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByText(props.labels.acceptButton);
    fireEvent.click(acceptButton);

    // Assert
    expect(props.onAccept).toBeCalled();
  });
});

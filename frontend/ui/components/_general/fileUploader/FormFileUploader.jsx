import { Controller } from 'react-hook-form';
import { FileUploader } from './FileUploader/FileUploader.jsx';

export const FormFileUploader = ({
  name,
  control,
  allowedFileTypes,
  callToActionText,
  topbar,
  classes,
  dynamicErrorSpace,
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange }, fieldState: { error } }) => (
      <FileUploader
        file={value}
        setFile={onChange}
        allowedFileTypes={allowedFileTypes}
        callToActionText={callToActionText}
        topbar={topbar}
        classes={classes}
        error={error?.message}
        dynamicErrorSpace={dynamicErrorSpace}
      />
    )}
  />
);

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import { Save } from 'react-feather';
import { useForm } from 'react-hook-form';
import RequiredInput from '../../shared/requiredInput/RequiredInput';
import blendProps from './blendProps';

function BlendDetailsEdit({ blendData, onHandle }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: blendData });

  const onSubmit = (data) => onHandle(data);

  return (
    <div className="card card-body">
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <div className="row">
          <div className="col-4 text-right">
            <RequiredInput register={register} errors={errors} propName="name" uiPropName="Name" />
            <RequiredInput register={register} errors={errors} propName="country" uiPropName="Country" />
            <RequiredInput register={register} errors={errors} propName="region" uiPropName="Region" />
            <p>
              <label htmlFor="area"><b>Area</b></label>
              <input {...register('area')} />
            </p>
            <RequiredInput register={register} errors={errors} propName="type" uiPropName="Type" />
          </div>
          <div className="col-4 text-right">
            <p>
              <span><b>Taste</b></span>
              <br />
              <label htmlFor="taste.acid"><b>Acid</b></label>
              <input
                type="number"
                {...register('taste.acid', {
                  min: 0,
                  max: {
                    value: 100,
                    message: 'more than 100'
                  }
                })}
              />
              {/* {errors.taste && (<p className="required_red">{errors.taste?.acid}</p>)} */}
              <br />
              <label htmlFor="taste.sweet"><b>Sweet</b></label>
              <input type="number" {...register('taste.sweet', { min: 0, max: 100 })} />
              <br />
              <label htmlFor="taste.intensity"><b>Intensity</b></label>
              <input type="number" {...register('taste.intensity', { min: 0, max: 100 })} />
            </p>
            <p>
              <label htmlFor="processing"><b>Processing</b></label>
              <input {...register('processing')} />
            </p>
            <p>
              <label htmlFor="drying"><b>Drying</b></label>
              <input {...register('drying')} />
            </p>
          </div>
          <div className="col-4 text-right">
            <p>
              <label htmlFor="brew"><b>Brew</b></label>
              <input {...register('brew', { required: true })} />
              {errors.brew && <p>Brew type is required</p>}
            </p>
            <p>
              <label htmlFor="minAltitude"><b>Min Altitude</b></label>
              <input {...register('minAltitude')} />
            </p>
            <p>
              <label htmlFor="maxAltitude"><b>Max Altitude</b></label>
              <input {...register('maxAltitude')} />
            </p>
            <p>
              <label htmlFor="harvestDate"><b>Harvest Date</b></label>
              <input {...register('harvestDate')} />
            </p>
            <p>
              <label htmlFor="roastDate"><b>Roast Date</b></label>
              <input {...register('roastDate')} />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <p>
              <label htmlFor="description"><b>Description</b></label>
              <input {...register('description')} />
            </p>
          </div>
          <div className="col-2">
            <button
              className="custom_btn"
              type="submit"
              data-test="button_submit"
            >
              <Save color="white" size="15" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
BlendDetailsEdit.propTypes = {
  blendData: PropTypes.objectOf(blendProps.blendProps),
  onHandle: PropTypes.func.isRequired
};
BlendDetailsEdit.defaultProps = {
  blendData: blendProps.blendPropsNew
};
export default BlendDetailsEdit;

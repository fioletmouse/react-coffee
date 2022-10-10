/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Droplet, Save, Sun
} from 'react-feather';
import { useForm } from 'react-hook-form';
import ProcessingTypes from '../../services/processing-types';
import RequiredInput from '../../shared/requiredInput/RequiredInput';
import blendProps from './blendProps';

function BlendDetailsEdit({ blendData, onHandle }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: blendData });

  const onSubmit = (data) => onHandle(data);

  return (
    <div className="card card-body">
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <div className="row">
          <div className="col-lg-4 text-right">
            <RequiredInput register={register} errors={errors} propName="name" uiPropName="Name" />
            <RequiredInput register={register} errors={errors} propName="country" uiPropName="Country" />
            <RequiredInput register={register} errors={errors} propName="region" uiPropName="Region" />
            <p>
              <label htmlFor="area"><b>Area</b></label>
              <input {...register('area')} />
            </p>
            <RequiredInput register={register} errors={errors} propName="type" uiPropName="Type" />
          </div>
          <div className="col-lg-4 text-right">
            <p>
              <span><b>Taste</b></span>
              <br />
              <label htmlFor="taste.acid"><b>Acid</b></label>
              <input
                type="number"
                {...register('taste.acid', {
                  min: { value: 1, message: 'Acid value should be more then 0' },
                  max: { value: 100, message: 'Acid value should be equal or less than 100' }
                })}
              />
              {errors.taste?.acid && (<p className="required_red">{errors.taste?.acid.message}</p>)}
              <br />
              <label htmlFor="taste.sweet"><b>Sweet</b></label>
              <input
                type="number"
                {...register('taste.sweet', {
                  min: { value: 1, message: 'Sweet value should be more then 0' },
                  max: { value: 100, message: 'Sweet value should be equal or less than 100' }
                })}
              />
              {errors.taste?.sweet && (<p className="required_red">{errors.taste?.sweet.message}</p>)}
              <br />
              <label htmlFor="taste.intensity"><b>Intensity</b></label>
              <input
                type="number"
                {...register('taste.intensity', {
                  min: { value: 1, message: 'Intensity value should be more then 0' },
                  max: { value: 100, message: 'Intensity value should be equal or less than 100' }
                })}
              />
              {errors.taste?.intensity && (<p className="required_red">{errors.taste?.intensity.message}</p>)}
            </p>
            <p>
              <label htmlFor="processing"><b>Processing</b></label>
              <label htmlFor={ProcessingTypes.wash} style={{ marginLeft: '20px' }}>
                <Droplet color="black" size="20" />
              </label>
              <input
                type="radio"
                {...register('processing')}
                value={ProcessingTypes.wash}
                id={ProcessingTypes.wash}
              />
              <label htmlFor={ProcessingTypes.dry} style={{ marginLeft: '20px' }}>
                <Sun color="black" size="20" />
              </label>
              <input
                type="radio"
                {...register('processing')}
                value={ProcessingTypes.dry}
                id={ProcessingTypes.dry}
              />
            </p>
            <p>
              <label htmlFor="drying"><b>Drying</b></label>
              <input {...register('drying')} />
            </p>
          </div>
          <div className="col-lg-4 text-right">
            <RequiredInput register={register} errors={errors} propName="brew" uiPropName="Brew" />
            <p>
              <label htmlFor="minAltitude"><b>Min Altitude</b></label>
              <input
                type="number"
                {...register(
                  'minAltitude',
                  {
                    min: { value: 0, message: 'Min altitude is less than 0' },
                    max: { value: 5000, message: 'Min altitude is greater than 5000' }
                  }
                )}
              />
              {errors.minAltitude && (<p className="required_red">{errors.minAltitude?.message}</p>)}
            </p>
            <p>
              <label htmlFor="maxAltitude"><b>Max Altitude</b></label>
              <input
                type="number"
                {...register('maxAltitude', {
                  min: { value: 0, message: 'Max altitude is less than 0' },
                  max: { value: 5000, message: 'Max altitude is greater than 5000' }
                })}
              />
              {errors.maxAltitude && (<p className="required_red">{errors.maxAltitude?.message}</p>)}
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
          <div className="col-12">
            <p>
              <label htmlFor="description"><b>Description</b></label>
              <textarea rows="2" style={{ width: '100%' }} {...register('description')} />
            </p>
          </div>
        </div>
        <div className="row">
          <div className=" offset-11 col-1 text-right">
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
  blendData: PropTypes.shape(blendProps.blendProps),
  onHandle: PropTypes.func.isRequired
};
BlendDetailsEdit.defaultProps = {
  blendData: blendProps.blendPropsNew
};
export default BlendDetailsEdit;

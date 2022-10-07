import React, { useRef, useState } from 'react';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import { Formik } from 'formik';
import InputWithLabel from 'common/components/InputWithLabel/InputWithLabel';

type Props = {
}

const PartnershipRequestSection: React.FC<Props> = (props) => {
  const formEl = useRef(null);
  const doHtmlFormPost = values => {
    formEl.current.submit();
  };
  const [onFocus, setOnFocus] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("Message");
  return (
    <div className="bg-form">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-start justify-center form">

          <div className="flex flex-row justify-between items-start w-full mb-5">
            <div className="flex flex-col">
              <div className="font-primary secondary-header-color">Partnership Request</div>
              <div className="font-secondary mt-5">
                Interested in learning more or getting involved?<br />
                Please fill this out the following form
              </div>
            </div>
            <Image src="../images/hands.svg" alt="Partnership Request" />
          </div>

          <Formik
            initialValues={{ email: '', name: '', organization: '', jobTitle: '', subject1: '', message: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = '* Required';
              }
              if (!values.organization) {
                errors.organization = '* Required';
              }
              if (!values.jobTitle) {
                errors.jobTitle = '* Required';
              }
              if (!values.subject1) {
                errors.subject1 = '* Required';
              }
              if (!values.message) {
                errors.message = '* Required';
              }
              if (!values.email) {
                errors.email = '* Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = '* Invalid email address';
              }
              console.log(`errors: ${JSON.stringify(errors)}`)
              return errors;
            }}
            onSubmit={doHtmlFormPost}
            // onSubmit={(values, actions) => {
            //   // setTimeout(() => {
            //   //   alert(JSON.stringify(actions, null, 2));
            //   //   actions.setSubmitting(false);
                
            //   // }, 400);
            // }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (          
              <form 
                method="post" 
                action="https://getform.io/f/89705bad-f8d6-4e8e-8d6c-c8c68567bcb4" 
                ref={formEl} 
                onSubmit={handleSubmit}
                className="w-full md:w-[500px]">
                <InputWithLabel
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.name}
                  label="Name"
                  type="text"
                  name="name"
                  error={errors.name}
                  touched={touched.name} />
                <InputWithLabel
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.email}
                  label="Email"
                  type="email"
                  name="email"
                  error={errors.email}
                  touched={touched.email} />
                <InputWithLabel
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.telegram}
                  label="Telegram Handle (optional)"
                  type="text"
                  name="telegram"
                  error=""
                  touched={true} />
                <InputWithLabel
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.organization}
                  label="Organization"
                  type="text"
                  name="organization"
                  error={errors.organization}
                  touched={touched.organization} />
                <InputWithLabel
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.jobTitle}
                  label="Job Title"
                  type="text"
                  name="jobTitle"
                  error={errors.jobTitle}
                  touched={touched.jobTitle} />
                <InputWithLabel
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.subject1}
                  label="Subject"
                  type="text"
                  name="subject1"
                  error={errors.subject1}
                  touched={touched.subject1} />
                <div className="field">
                  <div className={onFocus ? 'label' : 'label-hidden'}>Message</div>
                  <textarea
                  className="input-partnership-form"
                  name="message"
                  id="message"
                  placeholder={placeHolder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => {setOnFocus(true); setPlaceHolder('');}}
                  value={values.message} />
                    
                </div>
                {errors.message && touched.message && (
                  <div className="font-secondary secondary-text-color">
                    {errors.message}
                  </div>
                )}
                <Button
                  type="submit"
                  className={(Array.isArray(errors) || Object.values(errors).toString() != "") ? 'disabled-form-button' : 'form-button'}
                  width="100%"
                  title="Send"
                  disabled={isSubmitting || (Array.isArray(errors) || Object.values(errors).toString() != "")} />
              </form>
            )}
        </Formik>
       </div>
      </div>
    </div>
  );
};

export default PartnershipRequestSection;

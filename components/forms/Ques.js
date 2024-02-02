"use client"
import Image from "next/image"

export default function QuestionForm() {
    return(
        <form
        className="flex w-full flex-col gap-10"
      >
        <div
          name="title"
          render={({ field }) => (
            <div className="flex w-full flex-col">
              <label className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </label>
              
              <div className="mt-3.5">
                <input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  
                />
              </div>
              <div className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </div>
              <div className="text-red-500" />
            </div>
          )}
        />
        <div
        //   control={form.control}
          name="explanation"
        //   render={({ field }) => (
        //     <div className="flex w-full flex-col gap-3">
        //       <label className="paragraph-semibold text-dark400_light800">
        //         Detailed explanation of your problem{" "}
        //         <span className="text-primary-500">*</span>
        //       </label>
        //       <div className="mt-3.5">
        //         <div
        //            />
        //       </div>
        //       <div className="body-regular mt-2.5 text-light-500">
        //         Introduce the problem and expand on what you put in the title.
        //         Minimum 20 characters.
        //       </div>
        //       <div className="text-red-500" />
        //     </div>
        //   )}
        />
        {/* <div
          name="tags"
          render={({ field }) => (
            <div className="flex w-full flex-col">
              <label className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </label>
              <div className="mt-3.5">
                <>
                  <input
                    disabled={type === "Edit"}
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    placeholder="Add tags..."
                    onKeyDown={e => handleInputKeyDown(e, field)}
                  />

                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map(tag => (
                        <div
                          key={tag}
                          className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                          onClick={() =>
                            type !== "Edit"
                              ? handleTagRemove(tag, field)
                              : () => {}
                          }
                        >
                          {tag}
                          {type !== "Edit" && (
                            <Image
                              src="/assets/icons/close.svg"
                              alt="Close icon"
                              width={12}
                              height={12}
                              className="cursor-pointer object-contain invert-0 dark:invert"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              </div>
              <div className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </div>
              <div className="text-red-500" />
            </div>
          )}
        /> */}
        <button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
        //   disabled={isSubmitting}
        >
          {/* {isSubmitting ? (
            <>{type === "Edit" ? "Editing..." : "Posting..."}</>
          ) : (
            <>{type === "Edit" ? "Edit Question" : "Ask a Question"}</>
          )} */}
          d
        </button>
      </form>
    )};
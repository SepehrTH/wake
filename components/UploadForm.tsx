'use client';

import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Upload, ImageIcon, Loader2 } from 'lucide-react';
import { UploadSchema } from '@/lib/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import type { DocumentUploadFormValues } from '@/types';

const voices = {
  male: [
    { id: 'dave', name: 'Dave', description: 'Young male, British-Essex, casual & conversational' },
    { id: 'daniel', name: 'Daniel', description: 'Middle-aged male, British, authoritative but warm' },
    { id: 'chris', name: 'Chris', description: 'Male, casual & easy-going' },
  ],
  female: [
    { id: 'rachel', name: 'Rachel', description: 'Young female, American, calm & clear' },
    { id: 'sarah', name: 'Sarah', description: 'Young female, American, soft & approachable' },
  ],
};

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DocumentUploadFormValues>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      title: '',
      author: '',
      voice: 'rachel',
    },
  });

  const selectedVoice = watch('voice');

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('documentPdf', file, { shouldValidate: true });
      setPdfPreview(file.name);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('coverImage', file, { shouldValidate: true });
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const onSubmit = async (data: DocumentUploadFormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: implement submission logic
      console.log('Form data:', data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className="loading-wrapper">
          <div className="loading-shadow-wrapper bg-[var(--bg-card)]">
            <div className="loading-shadow">
              <Loader2 className="loading-animation size-12 text-[#6B2318]" />
              <p className="loading-title">Waking your document...</p>
              <p className="text-sm text-[var(--text-secondary)]">
                This may take a few minutes
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="new-book-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Document PDF File */}
          <div className="space-y-2">
            <Label className="text-base font-semibold text-[var(--text-primary)]">
              Document PDF File
            </Label>
            <div
              onClick={() => pdfInputRef.current?.click()}
              className="file-upload-shadow cursor-pointer rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] transition-colors hover:border-[var(--border-medium)]"
            >
              <input
                ref={pdfInputRef}
                type="file"
                accept=".pdf,application/pdf"
                onChange={handlePdfChange}
                className="hidden"
              />
              {pdfPreview ? (
                <div className="flex flex-col items-center gap-2 py-4">
                  <Upload className="size-10 text-[#6B2318]" />
                  <p className="text-sm font-medium text-[var(--text-primary)]">{pdfPreview}</p>
                  <p className="text-xs text-[var(--text-secondary)]">Click to change file</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 py-4">
                  <Upload className="size-10 text-[#9A8A78]" />
                  <p className="text-sm text-[#9A8A78]">Click to upload PDF</p>
                  <p className="text-xs text-[#B3A595]">PDF file (max 50MB)</p>
                </div>
              )}
            </div>
            {errors.documentPdf && (
              <p className="text-sm text-red-600">{errors.documentPdf.message}</p>
            )}
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label className="text-base font-semibold text-[var(--text-primary)]">
              Cover Image (Optional)
            </Label>
            <div
              onClick={() => imageInputRef.current?.click()}
              className="file-upload-shadow cursor-pointer rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] transition-colors hover:border-[var(--border-medium)]"
            >
              <input
                ref={imageInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />
              {imagePreview ? (
                <div className="flex flex-col items-center gap-2 py-4">
                  <img
                    src={imagePreview}
                    alt="Cover preview"
                    className="h-20 w-auto rounded-md object-cover"
                  />
                  <p className="text-xs text-[var(--text-secondary)]">Click to change image</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 py-4">
                  <ImageIcon className="size-10 text-[#9A8A78]" />
                  <p className="text-sm text-[#9A8A78]">Click to upload cover image</p>
                  <p className="text-xs text-[#B3A595]">Leave empty to auto-generate from PDF</p>
                </div>
              )}
            </div>
            {errors.coverImage && (
              <p className="text-sm text-red-600">{errors.coverImage.message}</p>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label
              htmlFor="title"
              className="text-base font-semibold text-[var(--text-primary)]"
            >
              Title
            </Label>
            <Input
              id="title"
              placeholder="ex: Rich Dad Poor Dad"
              className="h-12 rounded-xl border-[var(--border-subtle)] bg-white px-4 text-base"
              {...register('title')}
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          {/* Author Name */}
          <div className="space-y-2">
            <Label
              htmlFor="author"
              className="text-base font-semibold text-[var(--text-primary)]"
            >
              Author Name
            </Label>
            <Input
              id="author"
              placeholder="ex: Robert Kiyosaki"
              className="h-12 rounded-xl border-[var(--border-subtle)] bg-white px-4 text-base"
              {...register('author')}
            />
            {errors.author && (
              <p className="text-sm text-red-600">{errors.author.message}</p>
            )}
          </div>

          {/* Voice Selector */}
          <fieldset className="space-y-4">
            <legend className="text-base font-semibold text-[var(--text-primary)]">
              Choose Assistant Voice
            </legend>

            {/* Male Voices */}
            <div className="space-y-2">
              <p className="text-sm text-[var(--text-secondary)]">Male Voices</p>
              <div className="grid grid-cols-3 gap-3">
                {voices.male.map((voice) => (
                  <label
                    key={voice.id}
                    className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-4 transition-colors ${
                      selectedVoice === voice.id
                        ? 'border-[#6B2318] bg-[#6B2318]/5'
                        : 'border-[var(--border-subtle)] bg-white hover:border-[var(--border-medium)]'
                    }`}
                  >
                    <input
                      type="radio"
                      value={voice.id}
                      {...register('voice')}
                      className="mt-1 accent-[#6B2318]"
                    />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{voice.name}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{voice.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Female Voices */}
            <div className="space-y-2">
              <p className="text-sm text-[var(--text-secondary)]">Female Voices</p>
              <div className="grid grid-cols-3 gap-3">
                {voices.female.map((voice) => (
                  <label
                    key={voice.id}
                    className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-4 transition-colors ${
                      selectedVoice === voice.id
                        ? 'border-[#6B2318] bg-[#6B2318]/5'
                        : 'border-[var(--border-subtle)] bg-white hover:border-[var(--border-medium)]'
                    }`}
                  >
                    <input
                      type="radio"
                      value={voice.id}
                      {...register('voice')}
                      className="mt-1 accent-[#6B2318]"
                    />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{voice.name}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{voice.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {errors.voice && (
              <p className="text-sm text-red-600">{errors.voice.message}</p>
            )}
          </fieldset>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="form-btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-5 animate-spin" />
                Synthesizing...
              </>
            ) : (
              'Begin Synthesis'
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default UploadForm;

import { z } from 'zod';
import {
  MAX_FILE_SIZE,
  ACCEPTED_PDF_TYPES,
  MAX_IMAGE_SIZE,
  ACCEPTED_IMAGE_TYPES,
} from '@/lib/constants';

export const UploadSchema = z.object({
  documentPdf: z
    .instanceof(File, { message: 'Please upload a PDF file' })
    .refine((file) => file.size <= MAX_FILE_SIZE, 'File size must be less than 50MB')
    .refine(
      (file) => ACCEPTED_PDF_TYPES.includes(file.type),
      'Only PDF files are accepted'
    ),
  coverImage: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_IMAGE_SIZE, 'Image must be less than 10MB')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      'Only JPEG, PNG, and WebP images are accepted'
    )
    .optional(),
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  author: z.string().min(1, 'Author name is required').max(200, 'Author name is too long'),
  voice: z.string().min(1, 'Please select a voice'),
});

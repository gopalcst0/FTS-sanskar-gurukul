'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  childName: z.string().min(2, { message: 'Child&apos;s name is required' }),
  ageGroup: z.string({
    required_error: 'Please select an age group',
  }),
  interests: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function DemoBookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const ageGroupValue = watch('ageGroup')

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setFormMessage('Thank you! We&apos;ll contact you within 24 hours to schedule your demo class.')
      reset()
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setFormMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-accent/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle2 size={48} className="text-accent mx-auto" />
            <h3 className="text-xl font-semibold text-primary">Booking Confirmed!</h3>
            <p className="text-foreground">{formMessage}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Your Demo Class</CardTitle>
        <CardDescription>
          Fill in your details and we&apos;ll schedule a free demo class for your child
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Parent Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Parent Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                {...register('name')}
                placeholder="Enter your full name"
                className="bg-card border-border"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                {...register('email')}
                type="email"
                placeholder="your@email.com"
                className="bg-card border-border"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                {...register('phone')}
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-card border-border"
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Child Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Child Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Child&apos;s Name
              </label>
              <Input
                {...register('childName')}
                placeholder="Enter your child&apos;s name"
                className="bg-card border-border"
              />
              {errors.childName && (
                <p className="text-destructive text-sm mt-1">{errors.childName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Age Group
              </label>
              <Select value={ageGroupValue} onValueChange={(value) => setValue('ageGroup', value)}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-5">3-5 Years</SelectItem>
                  <SelectItem value="6-8">6-8 Years</SelectItem>
                  <SelectItem value="9-11">9-11 Years</SelectItem>
                  <SelectItem value="12-14">12-14 Years</SelectItem>
                  <SelectItem value="15+">15+ Years</SelectItem>
                </SelectContent>
              </Select>
              {errors.ageGroup && (
                <p className="text-destructive text-sm mt-1">{errors.ageGroup.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Interests (Optional)
              </label>
              <Input
                {...register('interests')}
                placeholder="e.g., Vedas, Mythology, Yoga, Sanskrit"
                className="bg-card border-border"
              />
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message (Optional)
            </label>
            <Textarea
              {...register('message')}
              placeholder="Any specific questions or requirements?"
              className="bg-card border-border min-h-24"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90"
            disabled={isLoading}
          >
            {isLoading ? 'Booking...' : 'Book Demo Class'}
          </Button>

          {formMessage && !isSubmitted && (
            <p className="text-destructive text-sm">{formMessage}</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

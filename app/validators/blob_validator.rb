class BlobValidator < ActiveModel::Validator
    def validate(record)
      unless record.blob.content_type.start_with?('image/')
        record.errors.add :blob, 'needs to be an image'
      end
    end
  end
  